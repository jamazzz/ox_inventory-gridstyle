return {

	['drillbit'] = {
		label = 'Drill Bit',
		description = 'A drill bit used for mining.',
		weight = 500,
		stack = true,
	},

	['spike_roll'] = {
		label = 'Spike Strip Roll',
		description = 'Careful its sharp',
		weight = 5000,
		stack = false,	
		consume = 0,
		client = {
			export = 'way_spikes.useRoll'
		},
	},
	
	['spike_deployer'] = {
		label = 'Spike Deployer',
		description = 'Remote spike strip deployer. Requires the right frequency to activate. Thank god for modern technology',
		weight = 15000,
		stack = false,
		consume = 0,
		client = {
			export = 'way_spikes.useDeployer'
		},
	},
	
	['spike_deployer_remote'] = {
		label = 'Spike Remote',
		description = 'Remote for tuning to the frequency of a spike strip deployer',
		weight = 500,
		stack = false,
		consume = 0,
		close = true,
		client = {
			export = 'way_spikes.useRemote'
		},
		buttons = {
			{
				label = 'Tune Frequency',
				action = function(slot)
					exports["way_spikes"]:tuneFrequency({
						slot = slot,
						name = 'spike_deployer_remote',
						close = true,
					})
				end
			},
			{
				label = 'Deploy Spikes',
				action = function(slot)
					exports["way_spikes"]:useRemote({
						slot = slot,
						name = 'spike_deployer_remote',
						close = true,
					})
				end
			}
		}
	},

	["mdt"] = {
		label = "MDT",
		weight = 300,
		stack = false,
		consume = 0,
		client = {
			export = "drx_mdt.OpenMDT",
		}
	},

	["phone"] = {
		label = "Telemóvel",
		weight = 300,
		stack = false,
		consume = 0,
		client = {
			export = "lb-phone.UsePhoneItem",
			remove = function()
				TriggerEvent("lb-phone:itemRemoved")
			end,
			add = function()
				TriggerEvent("lb-phone:itemAdded")
			end
		}
	},

	['vehiclekeys'] = {
		label = 'Vehicle Keys',
		weight = 220,
		stack = false,
		close = true,
		description = "Keys To A Car",
	},

	['keyring'] = {
		label = 'Keyring',
		weight = 220,
		stack = false,
		close = true,
		description = "A keyring that holds car keys.",
	},

	['aftermarket_locks'] = {
		label = 'Aftermarket Lock System',
		weight = 220,
		stack = false,
		close = true,
		description = "A locksystem to replace locks in a car.",
	},

	['lockpick'] = {
					label = 'Lockpick',
					weight = 850,
					stack = true,
					close = true,
					description = "A mysterious device."
	},

	['advancedlockpick'] = {
					label = 'Advanced Lockpick',
					weight = 850,
					stack = true,
					close = true,
					description = "A upgraded mysterious device."
	},

	['rental_paperwork'] = {
			label = 'Rental Paperwork',
			weight = 220,
			stack = false,
			close = true,
			description = "Paperwork for a rental vehicle"
	},

	['bandage'] = {
		label = 'Bandage',
		weight = 115,
		width = 1,
		height = 1,
		client = {
			anim = { dict = 'missheistdockssetup1clipboard@idle_a', clip = 'idle_a', flag = 49 },
			prop = { model = `prop_rolled_sock_02`, pos = vec3(-0.14, -0.14, -0.08), rot = vec3(-50.0, -50.0, 0.0) },
			disable = { move = true, car = true, combat = true },
			usetime = 2500,
		}
	},

	['black_money'] = {
		label = 'Dirty Money',
		width = 1,
		height = 1,
	},

	['burger'] = {
		label = 'Burger',
		weight = 220,
		width = 1,
		height = 1,
		client = {
			status = { hunger = 200000 },
			anim = 'eating',
			prop = 'burger',
			usetime = 2500,
			notification = 'You ate a delicious burger'
		},
	},

	['sprunk'] = {
		label = 'Sprunk',
		weight = 350,
		width = 1,
		height = 1,
		client = {
			status = { thirst = 200000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_ld_can_01`, pos = vec3(0.01, 0.01, 0.06), rot = vec3(5.0, 5.0, -180.5) },
			usetime = 2500,
			notification = 'You quenched your thirst with a sprunk'
		}
	},

	['parachute'] = {
		label = 'Parachute',
		weight = 8000,
		width = 2,
		height = 3,
		stack = false,
		client = {
			anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
			usetime = 1500
		}
	},

	['garbage'] = {
		label = 'Garbage',
		width = 1,
		height = 1,
	},

	['paperbag'] = {
		label = 'Paper Bag',
		weight = 1,
		width = 2,
		height = 2,
		stack = false,
		close = false,
		consume = 0
	},

	['backpack_small'] = {
		label = 'Small Backpack',
		weight = 500,
		width = 2,
		height = 2,
		stack = false,
		close = false,
		consume = 0
	},

	['backpack_medium'] = {
		label = 'Medium Backpack',
		weight = 800,
		width = 2,
		height = 3,
		stack = false,
		close = false,
		consume = 0
	},

	['backpack_large'] = {
		label = 'Large Backpack',
		weight = 1200,
		width = 3,
		height = 3,
		stack = false,
		close = false,
		consume = 0
	},

	['identification'] = {
		label = 'Identification',
		width = 1,
		height = 1,
		client = {
			image = 'card_id.png'
		}
	},

	['panties'] = {
		label = 'Knickers',
		weight = 10,
		width = 1,
		height = 1,
		consume = 0,
		client = {
			status = { thirst = -100000, stress = -25000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_cs_panties_02`, pos = vec3(0.03, 0.0, 0.02), rot = vec3(0.0, -13.5, -1.5) },
			usetime = 2500,
		}
	},

	['lockpick'] = {
		label = 'Lockpick',
		weight = 160,
		width = 1,
		height = 1,
	},

	['phone'] = {
		label = 'Phone',
		weight = 190,
		width = 1,
		height = 1,
		stack = false,
		consume = 0,
		client = {
			add = function(total)
				if total > 0 then
					pcall(function() return exports.npwd:setPhoneDisabled(false) end)
				end
			end,

			remove = function(total)
				if total < 1 then
					pcall(function() return exports.npwd:setPhoneDisabled(true) end)
				end
			end
		}
	},

	['money'] = {
		label = 'Money',
		width = 1,
		height = 1,
	},

	['mustard'] = {
		label = 'Mustard',
		weight = 500,
		width = 1,
		height = 2,
		client = {
			status = { hunger = 25000, thirst = 25000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_food_mustard`, pos = vec3(0.01, 0.0, -0.07), rot = vec3(1.0, 1.0, -1.5) },
			usetime = 2500,
			notification = 'You.. drank mustard'
		}
	},

	['water'] = {
		label = 'Water',
		weight = 500,
		width = 1,
		height = 2,
		client = {
			status = { thirst = 200000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
			usetime = 2500,
			cancel = true,
			notification = 'You drank some refreshing water'
		}
	},

	['radio'] = {
		label = 'Radio',
		weight = 1000,
		width = 1,
		height = 2,
		stack = false,
		allowArmed = true
	},

	['armour'] = {
		label = 'Bulletproof Vest',
		weight = 3000,
		width = 2,
		height = 2,
		stack = false,
		client = {
			anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
			usetime = 3500
		}
	},

	['clothing'] = {
		label = 'Clothing',
		width = 2,
		height = 2,
		consume = 0,
	},

	['mastercard'] = {
		label = 'Fleeca Card',
		stack = false,
		weight = 10,
		width = 1,
		height = 1,
		client = {
			image = 'card_bank.png'
		}
	},

	['scrapmetal'] = {
		label = 'Scrap Metal',
		weight = 80,
		width = 1,
		height = 1,
	},
}
