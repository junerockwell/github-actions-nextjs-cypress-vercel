import "./style.css";

type FormErrorTextType = {
  text: string;
  cypressId: string;
};
export default function FormErrorText(props: FormErrorTextType) {
  const { text, cypressId } = props;
  return (
    <p className="form-error-text" data-test={`${cypressId}`}>
      {text}
    </p>
  );
}
