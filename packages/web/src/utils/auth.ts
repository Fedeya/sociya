import { GetServerSideProps } from 'next';
import Cookie from 'cookies';

export const withAuth = (fn: GetServerSideProps) => {
  const auth: GetServerSideProps = async ctx => {
    const p = await fn(ctx);
    const cookie = new Cookie(ctx.req, ctx.res);
    const token = cookie.get('token');

    return {
      props: {
        token,
        ...p.props
      }
    };
  };

  return auth;
};

export const withAuthRedirect = () => {
  const redirect: GetServerSideProps = async ctx => {
    const cookie = new Cookie(ctx.req, ctx.res);
    const token = cookie.get('token');

    if (token) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    }

    return {
      props: {}
    };
  };

  return redirect;
};
