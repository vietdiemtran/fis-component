import{j as e}from"./jsx-runtime-3dc6859f.js";import{r as g}from"./index-d4014758.js";import{F as t,a as o}from"./index-4e22e652.js";import"./LineArrowsUp-143aac49.js";import{C}from"./index-b9d61f09.js";import{F as a}from"./index-35e06132.js";import"./getTheme-1aacf7d7.js";import"./index-01b5a1be.js";import"./AntdIcon-53f7c35e.js";import"./index-78ef5524.js";import"./roundedArrow-d06dbfd9.js";import"./UnstableContext-45358c13.js";import"./useSize-aec9e548.js";import"./button-ae057576.js";import"./pickAttrs-f0847687.js";import"./Pagination-33755ec1.js";import"./RightOutlined-12b2a696.js";import"./useMergedState-81b3e148.js";import"./KeyCode-6413d982.js";import"./index-6c7d4589.js";import"./useCSSVarCls-281ed227.js";import"./motion-8a2854a7.js";import"./index-1625a42e.js";import"./collapse-97de76d4.js";import"./index-ac9297cf.js";const h=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.6665 14.0001L11.9998 17.3334L15.3332 14.0001M8.6665 10.0001L11.9998 6.66675L15.3332 10.0001",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Q={title:"Components/Table/Header/Cell",component:t,tags:["autodocs"],args:{className:"",label:"Title Label Title Label Title Label Title Label",description:"Description",rightComponent:e.jsx(a,{icon:e.jsx(a,{size:"xs",icon:e.jsx(h,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),textAlign:"left",disabled:!1,hasRightDivider:!0,hasTruncateLabel:!1},argTypes:{className:{control:"text"},label:{control:"text"},description:{control:"text"},textAlign:{control:"select",options:["left","right"],description:"Căn lề text"},disabled:{control:"boolean"},hasRightDivider:{control:"boolean",description:"Ẩn/hiện divider"},hasTruncateLabel:{control:"boolean",description:"Hiển thị nội dung đầy đủ, mặc định là truncate"}},render:n=>e.jsx(t,{...n})},i={},l=()=>{const n=()=>e.jsx(a,{icon:e.jsx(a,{size:"xs",icon:e.jsx(h,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),[m,T]=g.useState(!1),u=L=>{T(L.target.checked)},r=[{title:e.jsx(t,{label:"Title Label",description:"Description",rightComponent:n()}),key:"index",render:()=>e.jsx("span",{children:"🆎 default"})},{title:e.jsx(t,{label:"Title Label Title Label Title Label Title Label Title Label",hasTruncateLabel:!1,description:"Description",rightComponent:n()}),key:"index",render:()=>e.jsx("span",{children:"🔠 wrap-text"})},{title:e.jsx(t,{label:"Title Label",rightComponent:n()}),key:"index",render:()=>e.jsx("span",{children:"📃 no description"})},{title:e.jsx(t,{label:"Title Label"}),key:"index",render:()=>e.jsx("span",{children:"📃 only label"})},{title:e.jsx(t,{label:"Title Label",hasRightDivider:!1}),key:"index",render:()=>e.jsx("span",{children:"🎼 no divider"})},{title:e.jsx(t,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:n(),textAlign:"right",hasTruncateLabel:!0}),key:"index",render:()=>e.jsx("span",{children:"align-right"})},{title:e.jsx(t,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:n(),hasTruncateLabel:!0,disabled:!0}),key:"index",render:()=>e.jsx("span",{children:"disable"})},{title:e.jsx(t,{label:void 0}),key:"index",render:()=>e.jsx("span",{children:"empty"})},{title:e.jsx(t,{label:void 0,rightComponent:e.jsx(C,{onChange:u,checked:m}),onlyIcon:!0}),key:"index",render:()=>e.jsx("span",{children:"Checkbox"})}];return e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[e.jsx(o,{columns:r.splice(0,4),dataSource:[1]}),e.jsx(o,{columns:r,dataSource:[1]})]})};var s,c,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,b,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const iconButton = () => <FISIconButton icon={<IconButton size="xs" icon={<ChevronSelectorIcon />} variant="tertiary-invisible" />} size="xs" variant="tertiary-invisible" />;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const columns = [{
    title: <FISTableHeaderCell label="Title Label" description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🆎 default</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" hasTruncateLabel={false} description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🔠 wrap-text</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>📃 no description</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" />,
    key: "index",
    render: () => <span>📃 only label</span>
  }, {
    title: <FISTableHeaderCell label="Title Label" hasRightDivider={false} />,
    key: "index",
    render: () => <span>🎼 no divider</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} textAlign="right" hasTruncateLabel />,
    key: "index",
    render: () => <span>align-right</span>
  }, {
    title: <FISTableHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} hasTruncateLabel disabled />,
    key: "index",
    render: () => <span>disable</span>
  }, {
    title: <FISTableHeaderCell label={undefined} />,
    key: "index",
    render: () => <span>empty</span>
  }, {
    title: <FISTableHeaderCell label={undefined} rightComponent={<FISCheckbox onChange={handleChange} checked={checked} />} onlyIcon />,
    key: "index",
    render: () => <span>Checkbox</span>
  }];
  return <div style={{
    display: "flex",
    gap: "12px",
    flexDirection: "column"
  }}>
      <FISTable columns={columns.splice(0, 4)} dataSource={[1]} />
      <FISTable columns={columns} dataSource={[1]} />
    </div>;
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const U=["Default","FullStyle"];export{i as Default,l as FullStyle,U as __namedExportsOrder,Q as default};
