const makeSpacersEditable = () => {
    const spacers = document.getElementById("previewEmail").contentWindow.document.querySelectorAll("[sh-spacer]");
    let counter = 0;

    for (let i = 0; i < spacers.length; i++) {
        counter++;
        const height = spacers[i].height;
        spacers[i].outerHTML = editableSpaceHtml(height);
    }
    console.log(`Made ${counter} spacers editable. Enjoy.`);
}

const editableSpaceHtml = (height) => {
    return `<td><div sh-content-block="Button" sh-version="2" class="ui-draggable">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" 
                style="padding-left: 0px; padding-right: 0px; mso-padding-left-alt: 0px; mso-padding-right-alt: 0px;">
                    <tbody>
                        <tr>
                            <td height="${height}" width="100%" style="font-size: 1px; line-height: 1px;" class="non-editable">
                                <br>
                            </td>
                        </tr>
                    </tbody>
            </table>
        <div class="email-block-controls" style="display: none;">
            <div class="email-block-controls-inner">
            <a title="Drag to Reorder" class="single-control email-block-controls-move"><i class="icon-move"></i></a>
            <a title="Edit Block" class="single-control email-block-controls-edit"><i class="icon-pencil"></i></a>
            <a title="Duplicate Block" class="single-control email-block-controls-clone"><i class="icon-copy"></i></a>
            
            <a title="Delete Block" class="single-control email-block-controls-delete"><i class="icon-trash"></i></a>
        </div>
    </div><td>`;
}

makeSpacersEditable();
