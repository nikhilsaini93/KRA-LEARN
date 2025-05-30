import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable() 
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
  super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey',
  });
  console.log('🛠️ JwtStrategy initialized');
}

async validate(payload: any) {
  console.log('✅ Token verified:', payload);
  return { userId: payload.sub, username: payload.username };
}
}
