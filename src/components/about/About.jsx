import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const About = () => {
    return (
        <Container className={'d-flex mt-5'}>
            <Image rounded className={`w-50`} src={'./photo_main.jpg'} alt={'фото меня)'}/>
            <div className={'d-flex mx-5 flex-column'}>
                <p className={'fs-5 fw-normal'}>Меня зовут Дмитрий, я начинающий front-end разработчик, в данный момент работаю по другой специальности, но решил менять деательность, и в свободное время изучаю web-разработку. Проходил курсы по вёрстке, JavaScript, React. В основном имею опыт на pet-проектах. Сейчас пишу приложение для реального пользования на своей основной работе на стеке: React, MobX, Tailwind, NodeJS, Express. Оно уже работает, но надо довести до ума. GitHub&nbsp;
                    <a className={'text-decoration-none text-primary'} target={'_blank'} href="https://github.com/quazacotl">здесь.</a>
                </p>
                <p className={'fs-5 fw-normal'}>Помимо работы увлекаюсь спортом, комп. играми, историей, политикой и являюсь отцом двух маленьких ангелочков &#128530;</p>
            </div>
        </Container>
    );
};

export default About;