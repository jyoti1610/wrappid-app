import {
  CoreBox,
  CoreClasses,
  CoreImage,
  CoreLink,
  CoreStack,
  CoreTypographyBody1,
  ThemeSelector
} from "@wrappid/core";

import data from "../../../package.json";
import logo from "../../resources/images/logo.png";

export default function WrappidAppLayout(props) {
  const { children } = props || { children: null };

  return (
    <>
      <CoreBox
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.SHADOW.NORMAL]}
      >
        <CoreImage
          height={50}
          src={logo}
          alt="logo"
        />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.PADDING.P1]}>
        {children}
      </CoreBox>

      <CoreBox
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_ROW,
          CoreClasses.PADDING.P2,
          CoreClasses.BG.BG_PRIMARY,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        ]}
      >
        <CoreTypographyBody1 >{data.name}</CoreTypographyBody1>

        <CoreTypographyBody1>
          Wrappid ©{new Date().getFullYear()}
        </CoreTypographyBody1>

        <CoreStack direction="row">
          <ThemeSelector />

          <CoreLink href={"/about"}>
            <CoreTypographyBody1>Version: {data.version}</CoreTypographyBody1>
          </CoreLink>
        </CoreStack>
      </CoreBox>
    </>
  );
}
