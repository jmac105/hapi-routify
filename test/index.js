import Hapi from "hapi";
import Code from "code";
import Lab  from "lab";
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;


describe("hapi-routify", () => {

    it("can set up a route", (done) => {
        const result = {hello: "world"};

        const options = {
            routes: [{
                method: "GET",
                path: "/",
                handler: function(request, reply) {
                    reply(result);
                }
            }]
        };

        const server = new Hapi.Server();
        server.connection();

        server.register({register: require("../dist/index.js"), options: options}, (error) => {

            expect(error).to.not.exist();

            server.inject('/', (res) => {

                expect(res.result).to.equal(result);

                done();
            });
        });
    });

    it("doesn't setup any route, passing no arguments", (done) => {

        const options = {};

        const server = new Hapi.Server();
        server.connection();

        server.register({register: require("../dist/index.js"), options: options}, (error) => {

            expect(error).to.not.exist();

            server.inject('/', (res) => {

                expect(res.statusCode).to.equal(404);

                done();
            });
        });
    });
});