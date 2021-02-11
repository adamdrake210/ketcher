/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { onAction } from '../../../state'
import { TopToolbar, TopToolbarProps, TopToolbarCallProps } from './TopToolbar'

type StateProps = Omit<TopToolbarProps, 'className'>
type OwnProps = Pick<TopToolbarProps, 'className'>

const mapStateToProps = (state): StateProps => ({
  status: state.actionState || {},
  opened: state.toolbar.opened,
  indigoVerification: state.requestsStatuses.indigoVerification,
  disableableButtons: ['layout', 'clean', 'arom', 'dearom', 'cip']
})

const mapDispatchToProps = (dispatch: Dispatch): TopToolbarCallProps => ({
  onAction: action => dispatch(onAction(action)),
  onOpen: (menuName, isSelected) =>
    dispatch({
      type: 'OPENED',
      data: { menuName, isSelected }
    })
})

const TopToolbarContainer: ComponentType<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopToolbar)

export { TopToolbarContainer }
