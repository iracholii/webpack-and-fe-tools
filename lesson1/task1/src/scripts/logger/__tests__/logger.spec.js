import { createLogger } from '../logger';

it('should return stored logs', () => {
  let logger = createLogger('user name');
  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  let logger = createLogger('user name');
  logger.log('login success');
  expect(logger.getLogs()).toEqual(['log - user name - login success']);
});

it('should save error message', () => {
  let logger = createLogger('user name');
  logger.error('login failed');
  expect(logger.getLogs()).toEqual(['error - user name - login failed']);
});

it('should return all logs', () => {
  let logger = createLogger('user name');
  logger.error('login failed');
  logger.log('login success');

  expect(logger.getLogs()).toEqual([
    'error - user name - login failed',
    'log - user name - login success',
  ]);
});
