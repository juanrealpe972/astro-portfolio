import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).init({
        lng: 'es', 
        fallbackLng: 'es', 
        debug: true,
        backend: {
        loadPath: '/locales/{{lng}}.json', 
        },
    }
);

export default i18n;