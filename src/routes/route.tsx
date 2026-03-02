import { BrowserRouter, Route, Routes } from "react-router";
import type { ReactNode } from "react";
import { publicRoutes, routes } from "./index";

type AppRoute = {
	path: string;
	component: ReactNode;
};

const allRoutes: AppRoute[] = [...routes, ...publicRoutes];

function NotFound() {
	return (
		<div className="min-h-screen grid place-items-center text-center p-8">
			<div>
				<h1 className="text-2xl font-semibold">Page not found</h1>
				<p className="text-sm text-[#787486]">The page you requested does not exist.</p>
			</div>
		</div>
	);
}

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				{allRoutes.map((route) => (
					<Route key={route.path} path={route.path} element={route.component} />
				))}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
