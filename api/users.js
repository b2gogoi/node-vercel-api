import cors from 'cors';

export default function handler(req, res) {
    const users = [
        { id: 1, name: 'Alice'},
        { id: 2, name: 'Bob'},
        { id: 3, name: 'Bhaskar'}
    ];
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(users);
}