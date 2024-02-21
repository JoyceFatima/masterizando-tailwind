'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import TabItem from './TabItem'
import { useState } from 'react'

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 hover:text-violet-700">
            <TabItem
              name="My details"
              value="my-details"
              active={currentTab === 'my-details'}
            />
            <TabItem
              name="Profile"
              value="profile"
              active={currentTab === 'profile'}
            />
            <TabItem
              name="Password"
              value="password"
              active={currentTab === 'password'}
            />
            <TabItem name="Team" value="team" active={currentTab === 'team'} />
            <TabItem name="Plan" value="plan" active={currentTab === 'plan'} />
            <TabItem
              name="Billing"
              value="billing"
              active={currentTab === 'billing'}
            />
            <TabItem
              name="Email"
              value="email"
              active={currentTab === 'email'}
            />
            <TabItem
              name="Notifications"
              value="notifications"
              active={currentTab === 'notifications'}
            />
            <TabItem
              name="Integrations"
              value="integrations"
              active={currentTab === 'integrations'}
            />
            <TabItem name="API" value="api" active={currentTab === 'api'} />
          </Tabs.List>

          <ScrollArea.Scrollbar
            className="flex h-0.5 translate-y-2 touch-none select-none flex-col bg-zinc-100"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
