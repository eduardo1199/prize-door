import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const body = request.body;
  const params = request.query.params;

  return response.status(200).json({
    params: params,
    body: body
  })
}