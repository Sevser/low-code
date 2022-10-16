const generateScript = (frame) => {
    return `<script> export default { name: "${frame.name.replaceAll(/\W/g, '_').trim()}", }; </script>`;
};

export default generateScript;