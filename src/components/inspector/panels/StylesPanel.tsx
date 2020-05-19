import React, { memo } from 'react'
import { Accordion } from '@chakra-ui/core'

import PaddingPanel from '../panels/styles/PaddingPanel'
import DimensionPanel from '../panels/styles/DimensionPanel'
import BorderPanel from '../panels/styles/BorderPanel'
import DisplayPanel from '../panels/styles/DisplayPanel'
import TextPanel from '../panels/styles/TextPanel'
import AccordionContainer from '../AccordionContainer'
import ColorsControl from '../controls/ColorsControl'
import EffectsPanel from './styles/EffectsPanel'
import ChildrenInspector from '../ChildrenInspector'
import ParentInspector from '../ParentInspector'
import CustomPropsPanel from './CustomPropsPanel'
import ClassNamePanel from './ClassNamePanel'

interface Props {
  isRoot: boolean
  showChildren: boolean
  parentIsRoot: boolean
  componentType: ComponentType
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
  componentType,
}) => (
  <Accordion allowMultiple defaultIndex={[0]}>
    <AccordionContainer title="Class name">
      <ClassNamePanel />
    </AccordionContainer>
    {!isRoot && (
      <AccordionContainer title="Custom props">
        <CustomPropsPanel />
      </AccordionContainer>
    )}

    {!isRoot && !parentIsRoot && (
      <AccordionContainer title="Parent">
        <ParentInspector />
      </AccordionContainer>
    )}

    {showChildren && (
      <AccordionContainer title="Children">
        <ChildrenInspector />
      </AccordionContainer>
    )}

    {componentType === 'Div' && (
      <>
        <AccordionContainer title="Layout">
          <DisplayPanel />
        </AccordionContainer>
        <AccordionContainer title="Spacing">
          <PaddingPanel type="margin" />
          <PaddingPanel type="padding" />
        </AccordionContainer>
        <AccordionContainer title="Size">
          <DimensionPanel />
        </AccordionContainer>
        <AccordionContainer title="Typography">
          <TextPanel />
        </AccordionContainer>
      </>
    )}
    {(isRoot || componentType === 'Div') && (
      <AccordionContainer title="Backgrounds">
        <ColorsControl
          enableHues
          label="Color"
          name="backgroundColor"
          withFullColor
        />
      </AccordionContainer>
    )}

    {componentType === 'Div' && (
      <>
        <AccordionContainer title="Border">
          <BorderPanel />
        </AccordionContainer>

        <AccordionContainer title="Effect">
          <EffectsPanel />
        </AccordionContainer>
      </>
    )}
  </Accordion>
)

export default memo(StylesPanel)
