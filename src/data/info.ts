import i18n from './i18n';

const yearOfBirth = 2005;

function calculateAge(year: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

export const info = {
    name: "Juan Realpe",
    description: i18n.t('Desarrollador FullStack'),
    about: i18n.t(`Desarrollador web de ${calculateAge(yearOfBirth)} años en Colombia autodidacta y proactivo, motivado a aprender y progresar.,`),
    socialMedia: {
        instagram: "https://www.instagram.com/juanca_realpe/",
        facebook: "https://www.facebook.com/juanrealpe972",
        github: "https://github.com/juanrealpe972",
        email: "mailto:juanrealpe972@gmail.com",
        linkedin: "https://www.linkedin.com/in/juan-camilo-realpe-ceron-9a271526a/"
    }
}
