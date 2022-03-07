import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).json({
    user: 1,
    name: 'Eduardo',
    method: request.method,
  });
}