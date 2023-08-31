export default function ParseHTML({ html, classes }) {
    return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
}