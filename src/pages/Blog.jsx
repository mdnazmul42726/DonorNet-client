import { Link, Outlet } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-3 bg-red-300 h-96">
                    <Link to={'/blog/1'}>111</Link> <br />
                    <Link to={'/2'}>222</Link> <br />
                    <Link to={'/3'}>333</Link> <br />
                </div>
                <div className="col-span-9 bg-red-400 h-96">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Blog;