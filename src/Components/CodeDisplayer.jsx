import ReactMarkdown from 'react-markdown';

export default function MarkdownDisplayer({ content }) {
    return (
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}