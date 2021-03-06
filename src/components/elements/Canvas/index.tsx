/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Ref } from 'react'
import { Stage, Layer, Line, Image as KImage } from 'react-konva'
import { SketchPicker } from 'react-color'
import Konva from 'konva'
import styled from '@emotion/styled'

import { BsPenFill, BsPen, BsEraserFill, BsEraser } from 'react-icons/bs'
import { BiUndo, BiRedo } from 'react-icons/bi'
import { Button, IconButton, Slider, Tooltip } from '@mui/material'
import { FiSend } from 'react-icons/fi'
import Space from '../../utils/Spacer'
import { useI18n } from '../../../utils/useI18n'

export type Props = {
  stageRef: Ref<Konva.Stage>
  saveFile: () => void
  image: HTMLImageElement
  sharePrev: () => void
}

const Component: React.VFC<Props> = ({
  stageRef,
  saveFile,
  image,
  sharePrev,
}) => {
  const [tool, setTool] = React.useState('pen')
  const [size, setSize] = React.useState(5)
  const [color, setColor] = React.useState('#000000')
  const [lines, setLines] = React.useState<any[]>([])
  const [pastLines, setPastLines] = React.useState<any[]>([])
  const isDrawing = React.useRef(false)

  const { getI18nText } = useI18n()

  const marks = [
    {
      value: 1,
      label: '1pt',
    },
    {
      value: 3,
      label: '3pt',
    },
    {
      value: 5,
      label: '5pt',
    },
    {
      value: 10,
      label: '10pt',
    },
    {
      value: 15,
      label: '15pt',
    },
    {
      value: 20,
      label: '20pt',
    },
  ]

  const handleMouseDown = (e: any) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([
      ...lines,
      {
        tool,
        points: [pos.x, pos.y],
        color,
        size,
      },
    ])
    setPastLines([])
  }

  const undo = () => {
    const newLines = lines.filter((l, i) => i !== lines.length - 1)
    setPastLines((prev) => [
      ...prev,
      lines.filter((l, i) => i === lines.length - 1)[0],
    ])
    setLines(newLines)
  }

  const redo = () => {
    if (pastLines.length === 0) return
    const newLines = pastLines.filter((l, i) => i !== pastLines.length - 1)
    const addLine = pastLines[pastLines.length - 1]
    setLines((prev) => [...prev, addLine].flat())
    setPastLines(newLines)
  }

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    const lastLine = lines[lines.length - 1]
    lastLine.points = lastLine.points.concat([point.x, point.y])
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }
  const handleChangeComplete = (color: any) => {
    setColor(color.hex)
  }
  const handleMouseUp = () => {
    isDrawing.current = false
  }

  const test = () => {
    console.log('lines', lines)
    console.log('pasts', pastLines)
  }

  return (
    <>
      <FlexDiv>
        <FlexCol>
          <IconButton component="span" onClick={() => setTool('pen')}>
            {tool === 'pen' ? <BsPenFill /> : <BsPen />}
          </IconButton>
          {tool === 'pen' ? (
            <SBsPenFill color={color} />
          ) : (
            <SBsPenFill color="white" />
          )}
        </FlexCol>
        <FlexCol>
          <IconButton component="span" onClick={() => setTool('eraser')}>
            {tool === 'eraser' ? <BsEraserFill /> : <BsEraser />}
          </IconButton>
          <SBsPenFill color="white" />
        </FlexCol>
        <Wrap>
          <Slider
            aria-label="Custom marks"
            defaultValue={3}
            valueLabelDisplay="auto"
            max={20}
            min={1}
            marks={marks}
            onChange={(e: any) => setSize(e.target.value)}
          />
        </Wrap>
        <FlexCol>
          <IconButton
            component="span"
            onClick={undo}
            disabled={lines.length === 0}>
            <BiUndo />
          </IconButton>
          <SBsPenFill color="white" />
        </FlexCol>
        <FlexCol>
          <IconButton
            component="span"
            onClick={redo}
            disabled={pastLines.length === 0}>
            <BiRedo />
          </IconButton>
          <SBsPenFill color="white" />
        </FlexCol>
      </FlexDiv>
      <FlexDiv>
        <StageDiv>
          <Stage
            width={500}
            height={500}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            style={{
              border: 'solid',
              marginTop: '10px',
            }}
            ref={stageRef}>
            <Layer>
              {image !== null && <KImage image={image} />}
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.size}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                  }
                />
              ))}
            </Layer>
          </Stage>
        </StageDiv>
        <CustomSketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
      </FlexDiv>
      <Wraper>
        <Space margin="16px">
          <Tooltip title={getI18nText('tooltip_current_art')}>
            <Button variant="outlined" endIcon={<FiSend />} onClick={saveFile}>
              Share Art
            </Button>
          </Tooltip>
        </Space>
        {/* <Space margin="16px">
          <Tooltip title={getI18nText('tooltip_previous_art')}>
            <Button variant="outlined" endIcon={<FiSend />} onClick={sharePrev}>
              Share Previous Art
            </Button>
          </Tooltip>
        </Space> */}
      </Wraper>
    </>
  )
}

export default Component

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

const StageDiv = styled.div`
  background-color: #ffffff;
`
const Wrap = styled.div`
  width: 500px;
  margin: 0px 32px;
`

const CustomSketchPicker = styled(SketchPicker)({
  marginTop: '10px',
  marginLeft: '20px',
})

const SBsPenFill = styled('div')<{
  color: string
}>`
  background: ${(props) => props.color};
  height: 4px;
`

const Wraper = styled('div')`
  display: flex;
  justify-content: end;
`
