import {Container} from "react-bootstrap";
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
                <div className={'d-flex gap-4 mt-4 flex-wrap'}>
                    {imgArray.slice(offset, offset + 6).map((item, i) => {
                        return (
                            <div key={i} className="position-relative overflow-hidden gallery-image-wrapper">
                                <Image key={item.id} fluid className={'gallery-image'} src={item.download_url}/>
                                <div className={'position-absolute d-flex justify-content-center align-items-center button-wrapper'}>
                                    <NavLink to={`/${item.id}`}>
                                        <button className={'btn btn-light'}>Подробнее</button>
                                    </NavLink>
                                </div>
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
                <CategoryPhotosView offset={6} imgArray={photos} categoryName={'Категория 2'}/>
                <CategoryPhotosView offset={12} imgArray={photos} categoryName={'Категория 3'}/>
                <CategoryPhotosView offset={18} imgArray={photos} categoryName={'Категория 4'}/>
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