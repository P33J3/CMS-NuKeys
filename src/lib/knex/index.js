import knex from 'knex';
import knexConfig from './config';
import knexConfigReg from './loginConfig';

export const db = knex(knexConfig);
export const dbReg = knex(knexConfigReg);
