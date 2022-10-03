import cookie from "js-cookie";

export const saveDataInCookie = (name, data) => {
    cookie.set(name, data);
}

export function withAuth(gssp) {
    return async (context) => {
        const {req, res} = context;
        const data = req.cookies;
        const {query} = context || {};
        const {name} = data;
        if (!name) {
            return {
                redirect: {
                    destination: "/login",
                }
            }
        }

        const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

        // Pass page-specific props along with user data from `withAuth` to component
        return {
            props: {
                ...gsspData.props,
                data,
                query
            }
        };
    }
}

export function withoutAuth(gssp) {
    return async (ctx) => {
        const {req, res} = ctx;
        const data = req.cookies;
        const {name} = data;
        if (name) {
            return {
                redirect: {
                    destination: "/dashboard",
                }
            }
        }

        // const gsspData = await gssp(ctx);
        return {
            props: {
                // ...gsspData.props,
                ...data,
            }
        }
    }
}