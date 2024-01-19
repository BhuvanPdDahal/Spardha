import jwt from 'jsonwebtoken';

interface DecodedData {
    email: string;
    id: string;
}

const auth = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(token) {
            const decodedData = jwt.verify(token, process.env.SECRET_KEY || '');
            req.email = (decodedData as DecodedData).email;
            req.userId = (decodedData as DecodedData).id;
            next();
        }

    } catch (error) {
        res.status(400).json({ message: "Authentication failed" });
    }
};

export default auth;