'use client';

import Wrapper from '../../containers/Wrapper/Wrapper';
import Navbar from './layouts/Navbar/Navbar';
import MintScreen from './components/MintScreen/MintScreen';
import MarqueeNFT from './components/MarqueeNft/MarqueeNFT';
import About from './components/About/About';
import Rarity from './components/Rarity/Rarity';
import Concept from './components/Concept/Concept';
import RoadMap from './components/RoadMap/RoadMap';
import Team from './components/Team/Team';
import Main from '../../containers/Main/Main';
import Game from './components/Game/Game';
import Faq from './components/Faq/Faq';
import Footer from './layouts/Footer/Footer';
import WalletSidebar from './modules/WalletSidebar/components/WalletSidebar/WalletSidebar';
import { ProfileSidebar } from './modules/ProfileSidebar';
import DevelopingModal from './components/DevelopingModal/DevelopingModal';
import MobileMenu from './layouts/MobileMenu/MobileMenu';
import MintModal from './components/MintModal/MintModal';
import ModalVideo from './components/ModalVideo/ModalVideo';
import { WlBoxModal } from './components/WlBoxModal';
//import Toastify from '../../components/Toastify/Toastify';
import { SupportModal } from './modules/SupportModal';
import { BuyCflatModal } from './modules/BuyCflatModal';

const Home = () => {
	return (
		<Wrapper background={'gray'} lock>
			<Navbar />
			<WalletSidebar />
			<ProfileSidebar />
			<MobileMenu />
			<WlBoxModal />

			<Main>
				<MintScreen />
				<MarqueeNFT />
				<About />
				<Rarity />
				<Concept />
				<RoadMap />
				<Team />
				<Game />
				<Faq />
			</Main>
			<Footer />

			<SupportModal />
			<DevelopingModal />
			<BuyCflatModal />
			{/* @ts-ignore */}
			<MintModal />
			<ModalVideo />
		</Wrapper>
	);
};

export default Home;
