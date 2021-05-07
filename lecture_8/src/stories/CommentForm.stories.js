import CommentForm from "../components/CommentForm";

export default {
  title: "Comments/Form",
  component: CommentForm,
};

/*
 * args will be automagically be populated with onSubmit from the "actions" add-on
 * https://storybook.js.org/docs/react/essentials/actions
 *
 * The way callback params are matched is configured in .storybook/preview.js.
 * See documentation for how to manually configure "action" params.
 */
export const Default = (args) => <CommentForm {...args} />;
