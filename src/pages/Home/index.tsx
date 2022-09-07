import { AppBox, AppHeader, AppLink, ImageBox } from '../../components';
import logo from '../../images/logo.png';

const Home = () => {
    return (
        <AppBox>
            <AppHeader>
                <ImageBox src={logo} alt="logo" />
                <p>
                    Welcome to Nomba
                </p>
                <AppLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </AppLink>
            </AppHeader>
        </AppBox>
    );
}

export default Home;
