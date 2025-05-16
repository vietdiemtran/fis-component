import{j as e}from"./jsx-runtime-47c18db8.js";import{r as g}from"./index-d806aa85.js";import{F as n,a as o}from"./index-ea9f1f0b.js";import"./ArrowRightIcon-2d46fdf7.js";import{C as h}from"./ChevronSelector-f9041cfa.js";import{C}from"./index-873f32b7.js";import{F as a}from"./index-e72c950e.js";import"./getTheme-624682de.js";import"./AntdIcon-b5d0c52f.js";import"./index-d16835b1.js";import"./index-35a52d1c.js";import"./roundedArrow-b20e57e4.js";import"./UnstableContext-a2e933a8.js";import"./useSize-ee7d4598.js";import"./button-1608bba2.js";import"./pickAttrs-551e8cfe.js";import"./index-70c9a0e9.js";import"./useMergedState-1b150724.js";import"./useCSSVarCls-b4f81dac.js";import"./collapse-8e27e3c5.js";import"./KeyCode-6413d982.js";import"./index-be6f683c.js";import"./motion-58c6f938.js";import"./index-8298a7d1.js";const P={title:"Components/Table/Header/Cell",component:n,tags:["autodocs"],args:{className:"",label:"Title Label Title Label Title Label Title Label",description:"Description",rightComponent:e.jsx(a,{icon:e.jsx(a,{size:"xs",icon:e.jsx(h,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),align:"left",disabled:!1,hasRightDivider:!0,hasTruncateLabel:!1},argTypes:{className:{control:"text"},label:{control:"text"},description:{control:"text"},textAlign:{control:"select",options:["left","right"],description:"Căn lề text"},disabled:{control:"boolean"},hasRightDivider:{control:"boolean",description:"Ẩn/hiện divider"},hasTruncateLabel:{control:"boolean",description:"Hiển thị nội dung đầy đủ, mặc định là truncate"}},render:t=>e.jsx(n,{...t})},i={},l=()=>{const t=()=>e.jsx(a,{icon:e.jsx(a,{size:"xs",icon:e.jsx(h,{}),variant:"tertiary-invisible"}),size:"xs",variant:"tertiary-invisible"}),[m,u]=g.useState(!1),T=L=>{u(L.target.checked)},r=[{title:e.jsx(n,{label:"Title Label",description:"Description",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"🆎 default"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",hasTruncateLabel:!1,description:"Description",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"🔠 wrap-text"})},{title:e.jsx(n,{label:"Title Label",rightComponent:t()}),key:"index",render:()=>e.jsx("span",{children:"📃 no description"})},{title:e.jsx(n,{label:"Title Label"}),key:"index",render:()=>e.jsx("span",{children:"📃 only label"})},{title:e.jsx(n,{label:"Title Label",hasRightDivider:!1}),key:"index",render:()=>e.jsx("span",{children:"🎼 no divider"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:t(),align:"right",hasTruncateLabel:!0}),key:"index",render:()=>e.jsx("span",{children:"align-right"})},{title:e.jsx(n,{label:"Title Label Title Label Title Label Title Label Title Label",description:"Description",rightComponent:t(),hasTruncateLabel:!0,disabled:!0}),key:"index",render:()=>e.jsx("span",{children:"disable"})},{title:e.jsx(n,{label:void 0}),key:"index",render:()=>e.jsx("span",{children:"empty"})},{title:e.jsx(n,{label:void 0,rightComponent:e.jsx(C,{onChange:T,checked:m}),onlyIcon:!0}),key:"index",render:()=>e.jsx("span",{children:"Checkbox"})}];return e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[e.jsx(o,{columns:r.splice(0,4),dataSource:[1]}),e.jsx(o,{columns:r,dataSource:[1]})]})};var s,c,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,b,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const iconButton = () => <FISIconButton icon={<IconButton size="xs" icon={<ChevronSelectorIcon />} variant="tertiary-invisible" />} size="xs" variant="tertiary-invisible" />;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const columns = [{
    title: <FISHeaderCell label="Title Label" description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🆎 default</span>
  }, {
    title: <FISHeaderCell label="Title Label Title Label Title Label Title Label Title Label" hasTruncateLabel={false} description="Description" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>🔠 wrap-text</span>
  }, {
    title: <FISHeaderCell label="Title Label" rightComponent={iconButton()} />,
    key: "index",
    render: () => <span>📃 no description</span>
  }, {
    title: <FISHeaderCell label="Title Label" />,
    key: "index",
    render: () => <span>📃 only label</span>
  }, {
    title: <FISHeaderCell label="Title Label" hasRightDivider={false} />,
    key: "index",
    render: () => <span>🎼 no divider</span>
  }, {
    title: <FISHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} align="right" hasTruncateLabel />,
    key: "index",
    render: () => <span>align-right</span>
  }, {
    title: <FISHeaderCell label="Title Label Title Label Title Label Title Label Title Label" description="Description" rightComponent={iconButton()} hasTruncateLabel disabled />,
    key: "index",
    render: () => <span>disable</span>
  }, {
    title: <FISHeaderCell label={undefined} />,
    key: "index",
    render: () => <span>empty</span>
  }, {
    title: <FISHeaderCell label={undefined} rightComponent={<FISCheckbox onChange={handleChange} checked={checked} />} onlyIcon />,
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
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Q=["Default","FullStyle"];export{i as Default,l as FullStyle,Q as __namedExportsOrder,P as default};
