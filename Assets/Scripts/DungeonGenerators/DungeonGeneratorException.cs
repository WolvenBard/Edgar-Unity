﻿namespace Assets.Scripts.DungeonGenerators
{
	using System;

	public class DungeonGeneratorException : Exception
	{
		public DungeonGeneratorException()
		{

		}

		public DungeonGeneratorException(string message) : base(message)
		{

		}
	}
}