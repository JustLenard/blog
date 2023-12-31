import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_APP_API

console.log('This is api', api)

const useImage = (imageName: string) => {
	const [imageSrc, setImageSrc] = useState<null | string>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchImage = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${api}/image/${imageName}`)
				console.log('This is response', response)
				const data: string = await response.text()

				setLoading(false)

				console.log('This is data', data)
				setImageSrc(data)
			} catch (err) {
				console.log('This is err', err)
				setError(true)
				setLoading(false)
			}
		}
		fetchImage()
	}, [imageName])

	return { imageSrc, loading, error }
}

export default useImage
