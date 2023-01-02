import { Appbar } from "react-native-paper";

type HeaderProps = {
    title: string;
};

const CustomHeader = (props: HeaderProps) => {


    return (
    <Appbar.Header>
        <Appbar.Content title={props.title} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
    );
};

export default CustomHeader;