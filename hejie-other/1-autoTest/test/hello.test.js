const request = require('supertest');
const assert = require('assert');
const hejie = require('koa');

describe('app.context', () => {
  const app1 = new hejie();
  app1.context.msg = 'hejieba';
  const app2 = new hejie();

  it('should merge properties', () => {
    app1.use((ctx, next) => {
      assert.equal(ctx.msg, 'hejieba');
      ctx.body = 'xx'
      ctx.status = 200;
    });

    return request(app1.listen())
      .get('/')
      .expect('xx')
      .expect(200);
  });

  it('should not affect the original prototype', () => {
    app2.use((ctx, next) => {
      assert.equal(ctx.msg, undefined);
      ctx.status = 204;
    });

    return request(app2.listen())
      .get('/')
      .expect(204);
  });
});