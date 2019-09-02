import uuid from 'uuid/v1'

export default [
  {
    firstName: 'Louis',
    lastName: 'Adam'
  },
  {
    firstName: 'Benjamin',
    lastName: 'Benoit'
  },
  {
    firstName: 'Ibrahima',
    lastName: 'Dansoko'
  },
  {
    firstName: 'Dylan',
    lastName: 'De Sousa'
  },
  {
    firstName: 'Marc',
    lastName: 'Didier'
  },
  {
    firstName: 'Yassine',
    lastName: 'Fatihi'
  },
  {
    firstName: 'Maxime',
    lastName: 'Gouenard'
  },
  {
    firstName: 'Quentin',
    lastName: 'Guichaoua'
  },
  {
    firstName: 'Pierre',
    lastName: 'Herisse'
  },
  {
    firstName: 'Benjamin',
    lastName: 'Lecuona'
  },
  {
    firstName: 'Adrien',
    lastName: 'Masson'
  },
  {
    firstName: 'Jean-Charles',
    lastName: 'Moussé'
  },
  {
    firstName: 'Charbel',
    lastName: 'Naoum'
  },
  {
    firstName: 'Antoine',
    lastName: 'Nivoy'
  },
  {
    firstName: 'Thomas',
    lastName: 'Phimanesone'
  },
  {
    firstName: 'Steeve',
    lastName: 'Randriamampianina'
  },
  {
    firstName: 'Gabriel',
    lastName: 'Roger de Campagnolle'
  },
  {
    firstName: 'Andrea',
    lastName: 'Serrano'
  }
].map(o => ({
  ...o,
  id: uuid(),
}))
