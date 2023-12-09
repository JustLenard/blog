import { PropsWithChildren, Suspense } from 'react'

const LoadingPage: React.FC<PropsWithChildren> = ({ children }) => {
	return <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
}

export default LoadingPage
