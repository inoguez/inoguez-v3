'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { type Locale } from '@/i18n-config';
import {
  ApiNavigationNavigation,
  ApiSocialSocial,
} from '@inoguez/strapi-types/ContentTypes';

type AppContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  socials: ApiSocialSocial[];
  navigation: ApiNavigationNavigation[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({
  children,
  initialLanguage,
  socials,
  navigation,
}: {
  children: ReactNode;
  initialLanguage: Locale;
  socials: ApiSocialSocial[];
  navigation: ApiNavigationNavigation[];
}) => {
  const [language, setLanguage] = useState<Locale>(initialLanguage);

  return (
    <AppContext.Provider value={{ language, setLanguage, socials, navigation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppProvider must be used within a AppProvider');
  }
  return context;
};
