import {Container, Spinner} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './gallery.css'
import {asyncSetPhotos, setPhotos, toggleLoaderAction} from "../../redux/redux";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import Loader from "../loader/Loader";

const Gallery = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggleLoaderAction(true))
        dispatch(asyncSetPhotos())
        setTimeout(() => {dispatch(toggleLoaderAction(false))}, 500)
        return () => dispatch(setPhotos(null))
    }, [])

    const photos = useSelector(state => state.photos)
    const isLoader = useSelector(state => state.isLoaderVisible)


    const CategoryPhotosView = props => {
        const {offset, categoryName, imgArray} = props
        return (
            <>
                <h2 className={'mt-5 text-center'}>{categoryName}</h2>
                <div className={'row g-5'}>
                    {imgArray.slice(offset, offset + 6).map(item => {
                        return (
                            <div className="col-sm-6 col-md-3 col-lg-2">
                                <NavLink to={`/${item.id}`}>
                                    <Image key={item.id} fluid className={'gallery-image'} src={item.download_url}/>
                                </NavLink>
                            </div>

                        )
                    })}
                </div>

            </>
        )
    }

    const PhotosView = () => {
        return (
            <>
                <CategoryPhotosView offset={0} imgArray={photos} categoryName={'Категория 1'}/>
                <CategoryPhotosView offset={5} imgArray={photos} categoryName={'Категория 2'}/>
                <CategoryPhotosView offset={11} imgArray={photos} categoryName={'Категория 3'}/>
                <CategoryPhotosView offset={17} imgArray={photos} categoryName={'Категория 4'}/>
            </>
        )
    }

    return (
        <Container className={'flex-grow-1 position-relative'}>
            {isLoader ? <Loader side={'200px'}/> : null}
            {photos ? <PhotosView/> : null}
        </Container>
    );
};

export default Gallery;