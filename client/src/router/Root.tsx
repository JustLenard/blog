import { lazy } from 'react'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import LoadingPage from './LoadingPage'

/**
 * All the project routes
 **/
export const appRoutes = {
	viewImage: 'gallery/*',
	notFound: '*',
}

/**
 * Lazy laod the pages
 **/
const ViewImagePage = lazy(() => import('../pages/ImageDisplayPage'))
const LazyNotFound = lazy(() => import('../pages/NotFound'))

/**
 * Create browser router
 **/
const router = createBrowserRouter([
	{
		path: appRoutes.viewImage,
		element: (
			<LoadingPage>
				<ViewImagePage />
			</LoadingPage>
		),
	},

	{
		path: appRoutes.notFound,
		element: (
			<LoadingPage>
				<LazyNotFound />
			</LoadingPage>
		),
	},
])

const Root = () => {
	return <RouterProvider router={router} />
}

export default Root
