import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {asyncSetSinglePhoto, setSinglePhoto, toggleLoaderAction} from "../../redux/redux";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../loader/Loader";
import Image from "react-bootstrap/Image";

const Details = () => {
    const dispatch = useDispatch()
    const isLoader = useSelector(state => state.isLoaderVisible)
    const singlePhoto = useSelector(state => state.singlePhoto)
    const match =  useParams()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(toggleLoaderAction(true))
        dispatch(asyncSetSinglePhoto(match.id))
        setTimeout(() => {dispatch(toggleLoaderAction(false))}, 500)
        return () => dispatch(setSinglePhoto(null))
    }, [])


    const SinglePhotoView = props => {
        const {author, id, download_url} = props.photoData

        return  (
            <div className={'d-flex'}>
                <Image fluid className={'w-50'} src={download_url}/>
                <div className={'d-flex flex-column mx-5'}>
                    <h2 className={'fs-3 fw-bolder'}>{author}</h2>
                    <h3 className={'mt-3'}>Идентификатор: {id}</h3>
                    <a className={'mt-3'} target={'_blank'} href={download_url}>Ссылка на оригинал</a>
                    <button onClick={() => navigate('/')} className={'btn btn-secondary mt-auto w-50'}>В галерею &larr;</button>
                </div>
            </div>
        )
    }

    return (
        <Container className={'mt-5 flex-grow-1 position-relative'}>
            {isLoader ? <Loader side={'200px'}/> : null}
            {singlePhoto ? <SinglePhotoView photoData={singlePhoto}/> : null}
        </Container>
    );
};

export default Details;