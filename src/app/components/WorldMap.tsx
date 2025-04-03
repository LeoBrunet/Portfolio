'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Location } from '../../types/location';
import { useLanguage } from '@/i18n/LanguageContext';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { Theme } from '../../types/theme';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngExpression } from 'leaflet';

interface WorldMapProps {
  locations: Location[];
  theme?: Theme;
}

// Fix for Leaflet marker icons in Next.js
const getMarkerIcon = (type: Location['type']) => {
  // Use simple black circle markers
  return L.divIcon({
    className: `marker-icon marker-${type}`,
    html: `<div class="marker-pin"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
};

// Add global styles for markers
if (typeof document !== 'undefined') {
  // Only run on client side
  if (!document.getElementById('leaflet-marker-styles')) {
    const style = document.createElement('style');
    style.id = 'leaflet-marker-styles';
    style.innerHTML = `
      .marker-pin {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -5px 0 0 -5px;
        background-color: #000;
        box-shadow: 0 0 0 2px white;
      }
      .marker-work:hover,
      .marker-education:hover,
      .marker-travel:hover {
        z-index: 1000 !important;
        transform: scale(1.2);
      }
      .type-badge {
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .type-badge:hover {
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(style);
  }
};

const scrollToSection = (type: 'work' | 'education', experienceId: string) => {
  const section = type === 'work' ? 'experience' : 'education';
  const element = document.querySelector(`[data-section="${section}"]`) as HTMLElement;
  
  if (element) {
    const childElement = element.querySelector(`#${experienceId}`) as HTMLElement;
    const targetElement = childElement || element;
    
    // Calculate the position to scroll to
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const targetRect = targetElement.getBoundingClientRect();
    const scrollPosition = window.scrollY + targetRect.top - headerHeight - 20; // Add some padding

    // Scroll smoothly to the position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });

    // Add highlight animation
    setTimeout(() => {
      if (childElement) {
        targetElement.classList.add('highlight-animation');

        // Remove highlight after animation
        setTimeout(() => {
          targetElement.classList.remove('highlight-animation');
        }, 3000);
      }
    }, 500);
  }
};

export const WorldMap = ({ locations, theme }: WorldMapProps) => {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  // Client-side only
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return language === 'fr' ? 'Présent' : 'Present';
    return format(new Date(dateStr), 'MMM yyyy', { locale: language === 'fr' ? fr : enUS });
  };

  // Map cannot be rendered on server
  if (!mounted) {
    return (
      <div className="h-[500px] w-full bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg relative" style={{ zIndex: 1 }}>
      <MapContainer 
        center={[20, 0] as LatLngExpression} 
        zoom={2} 
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={language === 'fr' 
            ? 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png' 
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />
        {locations.map((location) => (
          <Marker 
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng] as LatLngExpression}
            icon={getMarkerIcon(location.type)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{location.name[language]}</h3>
                <p className="text-sm text-gray-600">
                  {formatDate(location.period.startDate)} - {location.period.endDate ? formatDate(location.period.endDate) : language === 'fr' ? 'Présent' : 'Present'}
                </p>
                {location.description && (
                  <p className="mt-2 text-sm">
                    {location.description[language]}
                  </p>
                )}
                <div className="mt-2 flex gap-2">
                  {location.type.includes('work') && (
                    <span 
                      className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 type-badge"
                      onClick={() => scrollToSection('work', location.experienceId || 'DO_NOT_EXIST')}
                    >
                      {t('worldMap.work')}
                    </span>
                  )}
                  {location.type.includes('education') && (
                    <span 
                      className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 type-badge"
                      onClick={() => scrollToSection('education', location.experienceId || 'DO_NOT_EXIST')}
                    >
                      {t('worldMap.education')}
                    </span>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
