import type { MouseEvent } from 'react';
import { EdgeProps, NodeProps } from 'react-flow-renderer';
import { ChannelTypeEnum, IEmailBlock, StepTypeEnum } from '@novu/shared';

import type { IFormStep } from '../../pages/templates/components/formTypes';

export interface IEdge extends EdgeProps {
  parentId: string;
  childId?: string;
  addNewNode: (parentNodeId: string, channelType: string, childId?: string) => void;
}

export interface IFlowStep {
  id?: string;
  _id?: string;
  name?: string;
  uuid?: string;
  active?: boolean;
  template?: {
    type: StepTypeEnum;
    content?: string | IEmailBlock[];
    htmlContent?: string;
  };
  variants?: Omit<IFlowStep, 'variants'>[];
  digestMetadata?: IFormStep['digestMetadata'];
  delayMetadata?: IFormStep['delayMetadata'];
}

interface NodeData {
  Icon: React.FC<any>;
  label: string;
  tabKey: ChannelTypeEnum;
  index: number;
  testId: string;
  onDelete: (uuid: string) => void;
  onAddVariant: (uuid: string) => void;
  onAddConditions: (uuid: string) => void;
  onEdit: (e: MouseEvent<HTMLButtonElement>, node: INode) => void;
  error: string;
  channelType: StepTypeEnum;
  step: IFlowStep;
}

export enum NodeType {
  CHANNEL = 'channelNode',
  TRIGGER = 'triggerNode',
  ADD_NODE = 'addNode',
}

export type INode = NodeProps<NodeData>;
