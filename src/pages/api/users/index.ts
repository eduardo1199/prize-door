import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const Users = [
    {
      id: 1,
      name: 'Eduardo',
      course: 'Engenharia da computação'
    },
    {
      id: 2,
      name: 'Guilherme',
      course: 'Ensino medio'
    },
    {
      id: 3,
      name: 'Andreza',
      course: 'Ciências contabeis'
    },
    {
      id: 4,
      name: 'Vinicius',
      course: 'Engenharia Eletrica'
    },
    {
      id: 5,
      name: 'Fernanda',
      course: 'Engenharia ambiental'
    },
  ]

  return response.status(200).json(Users);
}