// Import required components from the UI kit
import ForgeUI, { render, Text, Fragment, Image } from '@forge/ui';

// ImageCardProps interface which will be used by ImageCard component
interface ImageCardProps {
    title: string;
    src: string;
}

// ImageCard component containing text and image
const ImageCard = ({title, src}: ImageCardProps) => (
    <Fragment>
        <Text>{title}</Text>
        <Image src={src} alt={title}/>
    </Fragment>
);

// App function will return the final output
const App = () => {
    const {title, url} = {
        title: "awesome avalanche GIF",
        url: "https://media3.giphy.com/media/26vUJR5VABcUJaCTm/200.gif?cid=74f3ab6481fcd606c80e02418b301c17130050edc03b7521&rid=200.gif"
    };

    return (
        <Fragment>
            <Text>Random GIF!</Text>
            <ImageCard src={url} title={title}/>
        </Fragment>
    );
};

// Exporting the above App function by exporting via 'run'
export const run = render(<App/>);