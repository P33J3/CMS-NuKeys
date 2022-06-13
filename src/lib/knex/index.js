import knex from 'knex';
import knexConfig from './config';

export const db = knex(knexConfig);
