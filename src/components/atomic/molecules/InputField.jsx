import Container from "../atoms/Container";
import Input from "../atoms/Input";
import Icon from "../atoms/Icons";
import clsx from "clsx";


const InputField = ({
    isError = false,
    isDisabled = false,
    container = {},
    wrapper = {},
    rightIcon = {},
    input = {},
    title = {},
    info = "",
    variant,
    onClick = (e) => null,
}) => {

    //defining the default prop
    container.variant =
        container.variant || (isError ? "input-field-error" : "input-field");
    text.isVisible = Boolean(info);
    text.text = info;
    text.className = clsx(
        text.className,
        "text-center sm:text-left pl-[0px] sm:pl-[16px] leading-[140%]"
    );

    //defining the defualt state style
    if (isDisabled) {
        wrapper.className = "opacity-50 cursor-not-allowed";
        container.className = "cursor-not-allowed";
        input.className = "cursor-not-allowed";
        text.className = "cursor-not-allowed";
        title.className = "cursor-not-allowed";
        onClick = (e) => null;
    }

    //defining the variant prop
    switch (variant) {
        case "column":
           
            title.variant = "input-field-title";
            input.variant = "input-field-col";
            title.isVisible = true;
            break;
        case "column-bg":
           
            title.variant = "input-field-title";
            input.variant = "input-field-col";
            title.isVisible = true;
            container.className = clsx(container.className, "bg-[#f6f6f6]");
            break;
        case "right-borderless":
            container.variant = "asset-media";
            container.className = clsx(
                container.className,
                "bg-transparent border-r-[0px] mb-[0px] rounded-r-[0px]"
            );
            break;
        case "auth-input-field":
            container.variant = isError ? "input-field-error" : "auth-input-field";
            break;
        case "create-admin-input-field":
            container.variant =
                container.variant || (isError ? "input-field-error" : "input-field");
            container.className = clsx(container.className, "mb-[16px]");
            text.className = clsx("text-left pl-[0px] sm:pl-[16px] leading-[140%]");
            text.variant = isError ? "input-field-error" : "primary";
            break;
        case "settings-input-field":
            container.variant =
                (isError ? "input-field-error" : "settings-input-field");
            container.className = clsx(container.className);

            break;
    }

    return (
        <Container onClick={onClick} {...wrapper}>
            <Container {...container}>
                    <Input {...input} />
                    <Icon {...rightIcon} />
            </Container>
            <Text {...text} />
        </Container>
    );
};

export default InputField;
