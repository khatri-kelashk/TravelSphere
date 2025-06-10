import { sign, verify } from 'jsonwebtoken';

export class AuthService {
  static generateToken(user) {
    return sign(
      { id: user._id, email: user.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
  }

  static verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      
      req.user = decoded;
      next();
    });
  }

}
