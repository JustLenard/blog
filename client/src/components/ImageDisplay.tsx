import { Box } from '@mui/joy'
import { useParams } from 'react-router'
import useImage from '../hooks/useImage'
import './ImageDisplay.css'
// import cat from '..cat.jpeg/assets/'

const ImageDisplay = () => {
	const params = useParams()

	const imageName = params['*'] ?? ''

	const { imageSrc, error, loading } = useImage(imageName)

	if (loading) return <div>Loading</div>
	if (error || !imageSrc) return <div>Error</div>

	return (
		<Box
			sx={{
				width: '100vw',
				// height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'hidden',
			}}
		>
			<img src={imageSrc} className="responsive-image" />
		</Box>
	)
}

export default ImageDisplay
