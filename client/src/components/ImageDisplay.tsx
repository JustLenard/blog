import { Box } from '@mui/joy'
import lily from '../assets/lilith_clothed_tattoo.png'
import './ImageDisplay.css'
import useImage from '../hooks/useImage'
import { useLocation, useParams } from 'react-router'
// import cat from '..cat.jpeg/assets/'

const ImageDisplay = () => {
	const params = useParams()

	const imageName = params['*'] ?? ''

	const { imageSrc, error, loading } = useImage(imageName)

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

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
			<img src={lily} className="responsive-image" />
		</Box>
	)
}

export default ImageDisplay
