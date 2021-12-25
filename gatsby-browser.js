const React = require("react");
const { RecoilRoot } = require("recoil");
const { default: Layout } = require("./src/components/layout")

exports.wrapRootElement = ({element}) => {
    return (
    <RecoilRoot>
        {element}
    </RecoilRoot>
    )
}