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

  const id = request.query.id;
  const User = Users.find(user => user.id === Number(id));

  if(!User) return response.status(400).send('Do not exist User from id');

  return response.status(200).json(User);
}